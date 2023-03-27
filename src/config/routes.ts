// ===========================
// No need authentication
// ===========================
export const PUBLIC_ROUTES = {
  default: '/',
  signup: '/signup',
  login: '/signin',
  features: '/features',
  pricing: '/pricing',
  faqs: '/faqs',
  contactus: '/contactus',
  error404: '/error404',
}

// ===========================
// Need authentication
// ===========================
export const PRIVATE_ROUTES = {
  dashboard: '/dashboard'
}
