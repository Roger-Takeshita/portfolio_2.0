export interface CardProps {
    name: String;
    imageUri: String;
    liveUrl: String;
    repoUrl: String;
    technologies: JSX.Element[];
    description: String;
}

export interface CertificateProps {
    institution: String;
    course: String;
    date?: String;
    location?: String;
    url: String;
    logoUri: String;
    description?: String;
}

export interface JournalProps {
    imgURI: String;
    titleOne: String;
    titleTwo?: String;
    text: String;
}

export interface Skills {
    name: string;
    icon: JSX.Element;
}

export interface SkillsLogosProps {
    title: string;
    skills: Skills[];
}

export interface FormEmail {
    name: string;
    email: string;
    msg: string;
}
