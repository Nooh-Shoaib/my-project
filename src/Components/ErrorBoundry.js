import React, { Component } from 'react';

class AdvancedErrorBoundary extends Component {
        constructor(props) {
                super(props);
                this.state = { hasError: false, error: null, errorInfo: null };
        }

        componentDidCatch(error, errorInfo) {
                this.logErrorToServer(error, errorInfo);
                this.setState({ hasError: true, error, errorInfo });
        }

        logErrorToServer = (error, errorInfo) => {
                // In a real-world scenario, send the error to a logging server
                console.error('Error logged to server:', error, errorInfo);
                // You can use an API call or other mechanisms to log errors to a remote server.
        };

        handleReload = () => {
                // Reload the page to recover from the error
                window.location.reload();
        };

        render() {
                if (this.state.hasError) {
                        return (
                                <div style={styles.errorContainer}>
                                        <h1 style={styles.errorHeading}>Something Went Wrong</h1>
                                        <p style={styles.errorMessage}>
                                                We apologize for the inconvenience. Please try again or reload the page.
                                        </p>
                                        <button onClick={this.handleReload} style={styles.reloadButton}>
                                                Reload Page
                                        </button>
                                        <div style={styles.errorDetails}>
                                                <strong>Error:</strong> {this.state.error && this.state.error.toString()}
                                                <br />
                                                <strong>Component Stack:</strong> {this.state.errorInfo && this.state.errorInfo.componentStack}
                                        </div>
                                </div>
                        );
                }

                return this.props.children;
        }
}

const styles = {
        errorContainer: {
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#f8d7da',
                color: '#721c24',
                borderRadius: '5px',
                border: '1px solid #f5c6cb',
                margin: '20px',
        },
        errorHeading: {
                color: '#721c24',
                fontSize: '24px',
        },
        errorMessage: {
                color: '#721c24',
                fontSize: '16px',
        },
        reloadButton: {
                padding: '10px',
                backgroundColor: '#dc3545',
                color: '#ffffff',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
                marginTop: '10px',
        },
        errorDetails: {
                marginTop: '20px',
                whiteSpace: 'pre-wrap',
        },
};

export default AdvancedErrorBoundary;
