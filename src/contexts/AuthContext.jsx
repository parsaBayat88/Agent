


import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStoredUser, setStoredUser, removeStoredUser } from '../utils/storage.js';
import { createClient } from '@supabase/supabase-js';
import Airtable from 'airtable';
const AIRTABLE_API_KEY = 'patnejuDdeTzZBAAS.f71a0d90bfc35c9c387b60d98cad6c3a1374d0f66f32d0e134a618ca38ee9230'; // Replace with your API Key
const BASE_ID = 'appNh0yWT47GmFQzN'; // Replace with your Base ID
const TABLE_NAME = 'tbl3EKOXJEmxUOQPN'; 
const supabaseUrl = 'https://epajmgwubcjdzzlmufuw.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwYWptZ3d1YmNqZHp6bG11ZnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2ODMyMTksImV4cCI6MjA1MDI1OTIxOX0.V7XvUn53e1jBnXTLRgRFBxbZQGYNfvJ-AMIshxXaTtA";
const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(BASE_ID);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      setUser(storedUser);

      
      const updateStoredUser = async () => {
      const record = await base(TABLE_NAME)
      .select({
          filterByFormula: `{email} = "${storedUser.email}"` // Replace "EMAIL" with your Airtable field name
      })
      .firstPage();
      const user = record[0].fields;

  setStoredUser(user);}
  updateStoredUser()
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API call
      let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        if (error.message === 'Email not confirmed') {
          console.error('Please confirm your email before logging in.');
        } else {
          console.error('Login error:', error.message);
        }
        throw new Error('Login error:', error.message);
      } else {
        
        const record = await base(TABLE_NAME)
            .select({
                filterByFormula: `{email} = "${email}"` // Replace "EMAIL" with your Airtable field name
            })
            .firstPage();
            const user = record[0].fields;

        setUser(user);
        setStoredUser(user);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    removeStoredUser();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}