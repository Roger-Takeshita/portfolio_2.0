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

export type Certificate = {
    certificateUri: string;
    alt: string;
};

export interface DotsProps {
    idx: number;
    certificates: Certificate[];
    handleDotClick: (idx: number) => any;
}

export type JournalProps = {
    imgURI: string;
    titleOne: string;
    titleTwo?: string;
    text: string;
};

export type Skills = {
    name: string;
    icon: JSX.Element;
};

export type SkillsLogosProps = {
    title: string;
    skills: Skills[];
};

export type FormEmail = {
    name: string;
    email: string;
    msg: string;
};

export interface ModalProps {
    modal: CardProps;
    clearModal: () => void;
}

export interface ModalMsgProps {
    modalMsg: {
        code: number;
        title: string;
        msg: string;
    };
    clearModalMsg: () => void;
}

export type KeyValue = {
    [key: string]: string | object;
};

export type ReduxForm = {
    setModalMsg: (object: any) => any;
};
