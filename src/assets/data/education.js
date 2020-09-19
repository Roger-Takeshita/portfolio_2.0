import graphQLCert from '../images/certificates/certificate_001.jpg';
import reactNativeCert from '../images/certificates/certificate_002.jpg';
import typeScriptCert from '../images/certificates/certificate_003.jpg';
import nodejsCert from '../images/certificates/certificate_004.jpg';
import dataStructureCert from '../images/certificates/certificate_005.jpg';
import cssCert from '../images/certificates/certificate_006.jpg';
import pythonCert from '../images/certificates/certificate_007.jpg';
import gaLogo from '../images/logos/education/education_ga.png';
import pucLogo from '../images/logos/education/education_puc.png';

export const education = [
    {
        institution: 'General Assembly (Previous Bitmaker Lab)',
        course: 'Software Engineering Immersive',
        date: 'Ago 2019 - Feb 2020',
        location: 'Toronto-ON',
        url:
            'https://generalassemb.ly/education/software-engineering-immersive/toronto',
        logoUri: gaLogo,
        description: '',
    },
    {
        institution: 'Pontifícia Universidade Católica do Paraná',
        course: 'Bachelor Degree in Mechatronics Engineering',
        date: 'Jan 2005 - Jan 2011',
        location: 'Brazil',
        url: 'https://www.pucpr.br/cursos-graduacao/engenharia-mecatronica/',
        logoUri: pucLogo,
        description: '',
    },
];

export const onlineEducation = [
    {
        certificateUri: pythonCert,
        alt: 'Python Certificate',
    },
    {
        certificateUri: graphQLCert,
        alt: 'GraphQL Certificate',
    },
    {
        certificateUri: reactNativeCert,
        alt: 'React Native Certificate',
    },
    {
        certificateUri: typeScriptCert,
        alt: 'TypeScript Certificate',
    },
    {
        certificateUri: cssCert,
        alt: 'Advanced CSS and SASS',
    },
    {
        certificateUri: nodejsCert,
        alt: 'Node.js Certificate',
    },
    {
        certificateUri: dataStructureCert,
        alt: 'Data Structure + Algorithms Certificate',
    },
];
