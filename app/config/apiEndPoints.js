// const BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? "http://115.248.133.211:8085/api/v2/"
//     : "http://115.248.133.211:8085/api/v2/";

const BASE_URL = //local check
  process.env.NODE_ENV === "production"
    ? "https://maplytiks-api.booleanbeyond.com/api/v2/"
    : "https://maplytiks-api.booleanbeyond.com/api/v2/";

// const BASE_URL = //palani velayutham
//   process.env.NODE_ENV === "production"
//     ? "https://api.maplytiks.com/api/v2/"
//     : "https://api.maplytiks.com/api/v2/";

// const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://api-dev.maplytiks.com/api/v2/'
//                                                          : 'http://localhost:8085/api/v2/';

// const BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://api-dev.maplytiks.com/api/v2/"
//     : "https://api-dev.maplytiks.com/api/v2/";
// const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://localhost:8085/api/v2/' : 'http://localhost:8085/api/v2/';

// const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://api-demo.maplytiks.com/api/v2/'
//                                                         : 'https://api-demo.maplytiks.com/api/v2/';

// const BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? "http://192.168.2.104:8085/api/v2/"
//     : "http://192.168.2.207:8085/api/v2/";

// KPI - Highlights
export const KPI_STATS_API = "/stats/kpi";

// Contact Us
export const CONTACT_US_API = "/api/v2/admin/contactus";

// Profile Details
export const GET_PROFILE_API = "/admin/user";

// Profile Image Upaod
export const PROFILE_IMAGE_UPLOAD_API = "/admin/imgupload";

// Profile Image delete
export const PROFILE_IMAGE_UPLOAD_DELETE_API = "/admin/imgdelete";

// Authentication
export const SIGN_IN_API = "/admin/signin";
export const SIGN_OUT_API = "/admin/signout";
export const FORGOT_PASSWORD_API = "/admin/forgotpassword";
export const RESET_PASSWORD_API = "/admin/resetpassword";

// Projects
export const PROJECT_API = "/project";
export const PROJECT_NOTIFICATION_API = "/project/notification";

// <===============DASHBOARD===================>

// Analytics Views
export const ANALYTICS_VIEWS_API = "/project/views";
export const ANALYTICS_GLOBALMARKET_API = "/project/globalval";

// Stats
export const STATS_VISION_API = "/stats/project/vision";
export const STATS_BRANDS_API = "/stats/project/brands";
export const STATS_MODELS_API = "/stats/project/models";
export const STATS_ASSETS_API = "/stats/project/assets";
export const STATS_VENUES_API = "/stats/project/venues";

// Timeline
export const TIMELINE_PULSE_API = "/stats/project/timeline/pulse";
export const TIMELINE_CUMULATIVE_API = "/stats/project/timeline/cumulative";

// CE
export const CONTINOUS_EXP_API = "/stats/project/continuousexp";

// Global Filters
export const TAGS_POST_API = `/project/gf/tags`;
export const VISION_FILTER_API = `/project/gf/vision`;
export const SPONSOR_FILTER_API = `/project/gf/brands`;
export const ASSET_FILTER_API = `/project/gf/assets`;
export const VENUES_FILTER_API = `/project/gf/venues`;
export const MARKET_FILTER_API = `/project/gf/globalvaluation`;

// Insight
export const GRAPH_INSIGHT_API = `/project/insights`;

// Overview
export const OVERVIEW_API = `/project/overview`;
export const GLOBAL_VALUATION_API = `/project/global`;

// Social
export const SOCIAL_SUB_PLATFORM_API = `/social/sub-platform`;
export const SOCIAL_BASE_REPORT_API = `/social/base-report`;
export const SOCIAL_DIGITAL_REPORT_TEMPLATE_API = `/social/detail-report/template`;
export const SOCIAL_DIGITAL_REPORT_API = `/social/detail-report`;
export const SOCIAL_TIMELINE_API = `/social/timeline`;
export const SOCIAL_TIMELINE_TEMPLATE_API = `/social/timeline/template`;
export const SOCIAL_HIGHLIGHTS_API = `/social/report/kpi`;
export const SOCIAL_RANK_TEMPLATE_API = `/social/rank/template`;
export const SOCIAL_RANK_API = `/social/rank`;
export const POST_ANALYSIS_API = `/social/post-analysis`;

// Digital
export const DIGITAL_SUB_PLATFORM_API = `/digital/sub-platform`;
export const DIGITAL_BASE_REPORT_API = `/digital/base-report`;
export const DIGITAL_REPORT_TEMPLATE_API = `/digital/detail-report/template`;
export const DIGITAL_REPORT_API = `/digital/detail-report`;
export const DIGITAL_TIMELINE_API = `/digital/timeline`;
export const DIGITAL_TIMELINE_TEMPLATE_API = `/digital/timeline/template`;
export const DIGITAL_HIGHLIGHTS_API = `/digital/report/kpi`;
export const DIGITAL_RANK_TEMPLATE_API = `/digital/rank/template`;
export const DIGITAL_RANK_API = `/digital/rank`;
export const DIGITAL_POST_ANALYSIS_API = `/digital/post-analysis`;

export { BASE_URL };
