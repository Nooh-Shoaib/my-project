// src/redux/actions.js
export const setData = (data) => ({ type: 'SET_DATA', payload: data });
export const setEnterpriseData = (enterpriseData) => ({ type: 'SET_ENTERPRISE_DATA', payload: enterpriseData });
// export const setAccordions = (accordions) => ({ type: 'SET_ACCORDIONS', payload: accordions });
export const setLoading = (loading) => ({ type: 'SET_LOADING', payload: loading });
