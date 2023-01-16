export interface UserInfo {
    status:string;
    id:number|null;
    username:string|null;
    name:string|null|null;
    avatar:string|null;
    location:string|null;
    bio:string|null;
    twitter:string|null;
    user_repositories:ReposInfo[];

}

export interface ReposInfo{
    id:number|null;
    name:string|null;
    description:string|null;
    repository_language:string[]|null;
    repo_url:string;
}

interface ReposLanguage{
    id:number;
    language:string|null;
    repositories:number;
}

export interface EnteredUsername{
    userName:string;
}

