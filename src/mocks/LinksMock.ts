import { Link } from "src/app/shared/interfaces/Link";

export const mockedLinks: Link[] = [{
    id: 1,
    title: 'Smart4 Report',
    image: '../../../assets/images/logo_powerbi.png',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNmU4NTAzZDQtNDI2YS00YTJmLWEzMWMtOTc0YWQ0MWUyZTc0IiwidCI6ImUwOTdkOGQ5LTc4ZTUtNDY0YS04ODhiLWZlOGJiODk5MTIwMCJ9',
  },
  {
    id: 2,
    title: 'Smart4 Biz',
    image: '../../../assets/images/logo_salesforce.png',
    url: 'https://login.salesforce.com/?locale=es',
  },
  {
    id: 3,
    title: 'Smart4 Talk',
    image: '../../../assets/images/logo_smart4talk.png',
    url: 'https://smart4engineering.talkspirit.com/#/login',
  }
];

export const mockedSocialLinks: Link[] = [
    {
      id: 4,
      title: 'LinkedIn',
      image: '../../../assets/images/logo_linkedin.png',
      url: 'https://www.linkedin.com/company/smart4-engineering/',
      // url: 'https://it.linkedin.com/?src=go-pa&trk=sem-ga_campid.20677489327_asid.153452322614_crid.677545198980_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.1008463&mcid=7120409760495009793&cid=&gclid=CjwKCAiA7t6sBhAiEiwAsaieYh4Z5Qax9Q_lCM7fTqoYIPIFQEv9mWAsX1vO1N7z6JMOgWs3OC3jfBoCYy4QAvD_BwE&gclsrc=aw.ds',
    },
    {
      id: 5,
      title: 'Smart4 web',
      image: '../../../assets/images/logo_smart4ll_web.png',
      url: 'https://www.facebook.com/SMART4ALL.Project/',
    },
  ];