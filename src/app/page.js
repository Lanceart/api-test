
'use client';
import React, { useState, useEffect } from 'react';
import UserList from '../components/List/UserList';
import ErrorDisplay from '../components/Popup/ErrorDisplay';
import LoadingIndicator from '../components/Loading/LoadingIndicator';
import Header from '@/components/Header';

import styles from "./page.module.css";
function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      async function fetchData() {
          try {
              const response = await fetch(`https://jsonplaceholder.typicode.com/userss`);
              if (!response.ok) {
                  throw new Error('Failed to fetch users');
              }
              const data = await response.json();
              setUsers(data);
          } catch (err) {
              setError(err);
          } finally {
              setLoading(false);
          }
      }

      fetchData();
  }, []);

  return (
      <div>
          <Header />
          {loading ? (
              <LoadingIndicator />
          ) : error ? (
              
              <ErrorDisplay message={error.message} />
              
          ) : (
            <div className={styles.center}>
              <UserList users={users} />
            </div>
          )}
      </div>
  );
}

export default UsersPage;

