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






// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import ScheduleMeeting from '../Components/ScheduleMeeting';
// import Layout from '../Components/Layout';


// // ... (other imports)

// const OurServices = () => {
//         const [data, setData] = useState({});
//         const { slug } = useParams();

//         useEffect(() => {
//                 const fetchData = async () => {
//                         try {
//                                 const [pageData, additionalData] = await Promise.all([
//                                         fetch(`https://my-json-server.typicode.com/Nooh-Shoaib/OurServices/pagedata?slug=${slug}`).then(response => response.json()),
//                                         fetch(`https://my-json-server.typicode.com/Nooh-Shoaib/AdditionalData/pagedata?slug=${slug}`).then(response => response.json())
//                                 ]);

//                                 const mergedData = {
//                                         breadcrumbs: { ...pageData.breadcrumbs, ...additionalData.breadcrumbs },
//                                         description: [...pageData.description, ...additionalData.description],
//                                         tech: [...pageData.tech, ...additionalData.tech],
//                                         demandDevs: { ...pageData.demandDevs, ...additionalData.demandDevs },
//                                         selection: [...pageData.selection, ...additionalData.selection],
//                                         additionalData: { ...pageData.additionalData, ...additionalData.additionalData },
//                                 };

//                                 setData(mergedData);
//                         } catch (error) {
//                                 console.error('Error fetching data:', error);
//                         }
//                 };

//                 fetchData();
//         }, [slug]);


//         const { breadcrumbs, description, tech, demandDevs, selection, additionalData } = data;

//         return (
//                 <>
//                         <Layout>
//                                 {/* Display Breadcrumbs */}
//                                 <div style={{ backgroundImage: `url(${breadcrumbs?.backgroundimage})`, padding: '20px', textAlign: 'center' }}>
//                                         <h2 className='text-white font-semibold text-3xl'>{breadcrumbs?.pageTitle}</h2>
//                                 </div>

//                                 {/* Display Description */}
//                                 {description && (
//                                         <div>
//                                                 <h3>{description[0].heading}</h3>
//                                                 <p>{description[0].text}</p>
//                                         </div>
//                                 )}
//                                 <ScheduleMeeting />

//                                 {/* Display Tech Information */}
//                                 {tech && (
//                                         <div>
//                                                 <h3>{tech[0].techHeading}</h3>
//                                                 <p>{tech[0].techText}</p>

//                                                 {/* Display Cards Information */}
//                                                 {tech[0].cards && (
//                                                         <div>
//                                                                 {tech[0].cards.map((card, index) => (
//                                                                         <div key={index}>
//                                                                                 <img src={card.icon} alt={`icon-${index}`} />
//                                                                                 <h3>{card.heading}</h3>
//                                                                                 <p>{card.text}</p>
//                                                                         </div>
//                                                                 ))}
//                                                         </div>
//                                                 )}
//                                         </div>
//                                 )}

//                                 {/* Display Service Button */}
//                                 <button className='py-3 px-4 bg-transparent text-black border-black border-2 hover:text-white hover:bg-black duration-300 font-semibold rounded-lg'>Avail Service</button>

//                                 {/* Display DemandDevs Information */}
//                                 {demandDevs && (
//                                         <div style={{ backgroundImage: `url(${demandDevs.backgroundimage})`, padding: '20px', textAlign: 'center' }}>
//                                                 <h2 className='text-white font-semibold text-3xl'>{demandDevs.heading}</h2>
//                                                 {demandDevs.image && (
//                                                         <img src={demandDevs.image} alt="work" />
//                                                 )}
//                                                 <div className="lg:flex relative pt-3 px-4 lg:space-x-2">
//                                                         <div>
//                                                                 <button className="py-2.5 px-3 md:px-2 lg:px-5 rounded-md border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-white text-black my-3 lg:text-lg text-base">
//                                                                         Hire Affordable Developers Now!
//                                                                 </button>
//                                                         </div>
//                                                         <div>
//                                                                 <Link
//                                                                         to="/schedule-a-meeting"
//                                                                         target="_blank"
//                                                                         rel="noopener noreferrer"
//                                                                 >
//                                                                         <button className="lg:py-2.5 md:py-2.5 px-4 md:px-2 lg:px-6 rounded-lg font-semibold border-2 mx-3 md:mx-0 lg:mx-0 border-white bg-transparent my-3 text-white lg:text-lg text-base">
//                                                                                 Schedule a Meeting
//                                                                         </button>
//                                                                 </Link>
//                                                         </div>
//                                                 </div>
//                                         </div>
//                                 )}

//                                 {/* Display Our Selection  */}
//                                 {selection && (
//                                         <div>
//                                                 <h3>{selection[0].heading}</h3>

//                                                 {/* Display Selection Cards */}
//                                                 {selection[0].cards && (
//                                                         <div>
//                                                                 {selection[0].cards.map((card, index) => (
//                                                                         <div key={index}>
//                                                                                 <img src={card.icon} alt={`icon-${index}`} />
//                                                                                 <h3>{card.heading}</h3>
//                                                                                 <p>{card.text}</p>
//                                                                         </div>
//                                                                 ))}
//                                                         </div>
//                                                 )}
//                                         </div>
//                                 )}


//                         </Layout>
//                 </>
//         );
// };

// export default OurServices;
