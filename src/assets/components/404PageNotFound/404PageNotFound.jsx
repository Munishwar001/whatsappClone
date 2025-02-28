import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f8f9fa',
                textAlign: 'center',
                padding: '0 20px',
            }}
        >
            <h1 style={{ fontSize: '8rem', margin: 0, color: '#343a40' }}>404</h1>
            <h2 style={{ margin: '10px 0', color: '#6c757d' }}>Page Not Found</h2>
            <p style={{ marginBottom: '20px', color: '#6c757d' }}>
                Oops! The page you are looking for doesn't exist.
            </p>
            <Link
                to="/login"
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                }}
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
