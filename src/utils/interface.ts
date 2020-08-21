export interface CardProps {
    name: string;
    imageUri: string;
    liveUrl?: string;
    repoUrl?: string;
    technologies: JSX.Element[];
    description: string;
    // setModal?: ((object: object | undefined) => object) | undefined;
    setModal?: (object: any) => any;
}

export interface CertificateProps {
    institution: string;
    course: string;
    date?: string;
    location?: string;
    url: string;
    logoUri: string;
    description?: string;
}

export interface JournalProps {
    imgURI: string;
    titleOne: string;
    titleTwo?: string;
    text: string;
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

export interface ModalProps {
    modal: CardProps;
    clearModal: () => void;
}

export interface KeyValue {
    [key: string]: string | object;
}