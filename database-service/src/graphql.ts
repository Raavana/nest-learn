
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum AssetType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}

export enum JobType {
    PHOTO_EDIT = "PHOTO_EDIT",
    VIDEO_EDIT = "VIDEO_EDIT",
    GRAPHIC_DESIGN = "GRAPHIC_DESIGN",
    INTERIOR_DESIGN = "INTERIOR_DESIGN"
}

export enum JobStatus {
    CREATED = "CREATED",
    ASSIGNED = "ASSIGNED",
    IN_PROGRESS = "IN_PROGRESS",
    REQUESTOR_ACTION = "REQUESTOR_ACTION",
    FINISHED = "FINISHED",
    COMPLETE = "COMPLETE"
}

export enum Role {
    POSTER = "POSTER",
    SUPER_POSTER = "SUPER_POSTER",
    CREATIVE = "CREATIVE",
    SUPER_CREATIVE = "SUPER_CREATIVE",
    ADMIN = "ADMIN"
}

export class CreateAssetInput {
    asset_url?: Nullable<string>;
    job_id?: Nullable<string>;
    job?: Nullable<ConnectJobWithAssetInput>;
    asset_type?: Nullable<AssetType>;
    asset_description?: Nullable<string>;
}

export class UpdateAssetInput {
    id: string;
    asset_url?: Nullable<string>;
    job_id?: Nullable<string>;
    job?: Nullable<ConnectJobWithAssetInput>;
    asset_type?: Nullable<AssetType>;
    asset_description?: Nullable<string>;
}

export class ConnectJobWithAssetInput {
    connect?: Nullable<ConnectJobInput>;
}

export class ConnectJobInput {
    id?: Nullable<string>;
}

export class CreateJobInput {
    title: string;
    description: string;
    created_by_id?: Nullable<string>;
    assigned_to_id?: Nullable<string>;
    assigned_to?: Nullable<UpdateUserInput>;
    created_by: ConnectUserWithJobInput;
    status: JobStatus;
    type: JobType;
    budget: number;
    currency?: Nullable<string>;
    revision_count?: Nullable<number>;
    revision_notes?: Nullable<string>;
    assets?: Nullable<Nullable<CreateAssetInput>[]>;
}

export class UpdateJobInput {
    id: string;
    title?: Nullable<string>;
    description?: Nullable<string>;
    assigned_to_id?: Nullable<string>;
    assigned_to?: Nullable<ConnectUserWithJobInput>;
    status?: Nullable<JobStatus>;
    budget?: Nullable<number>;
    currency?: Nullable<string>;
    revision_count?: Nullable<number>;
    revision_notes?: Nullable<string>;
    assets?: Nullable<Nullable<CreateAssetInput>[]>;
}

export class ConnectUserWithJobInput {
    connect?: Nullable<ConnectUserInput>;
}

export class ConnectUserInput {
    id: string;
}

export class CreateProfileInput {
    bio?: Nullable<string>;
    userId?: Nullable<string>;
}

export class UpdateProfileInput {
    id: string;
    userId?: Nullable<string>;
    bio?: Nullable<string>;
}

export class CreateUserInput {
    email: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    role: Role;
    email_verified?: Nullable<boolean>;
    created_jobs?: Nullable<Nullable<UpdateJobInput>[]>;
    assigned_jobs?: Nullable<Nullable<UpdateJobInput>[]>;
    profile?: Nullable<CreateUserProfileInput>;
}

export class UpdateUserInput {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    role: Role;
    email_verified?: Nullable<boolean>;
    created_jobs?: Nullable<Nullable<UpdateJobInput>[]>;
    assigned_jobs?: Nullable<Nullable<UpdateJobInput>[]>;
    profile?: Nullable<UpdateUserProfileInput>;
}

export class UpdateUserProfileInput {
    update?: Nullable<UpdateProfileInput>;
}

export class CreateUserProfileInput {
    create?: Nullable<CreateProfileInput>;
}

export class Asset {
    id: string;
    asset_url?: Nullable<string>;
    job_id?: Nullable<string>;
    job?: Nullable<Job>;
    asset_type?: Nullable<AssetType>;
    asset_description?: Nullable<string>;
}

export abstract class IQuery {
    abstract assets(): Nullable<Asset>[] | Promise<Nullable<Asset>[]>;

    abstract asset(id: string): Nullable<Asset> | Promise<Nullable<Asset>>;

    abstract jobs(): Nullable<Job>[] | Promise<Nullable<Job>[]>;

    abstract job(id: string): Nullable<Job> | Promise<Nullable<Job>>;

    abstract profiles(): Nullable<Profile>[] | Promise<Nullable<Profile>[]>;

    abstract profile(id: string): Nullable<Profile> | Promise<Nullable<Profile>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createAsset(createAssetInput: CreateAssetInput): Asset | Promise<Asset>;

    abstract updateAsset(updateAssetInput: UpdateAssetInput): Asset | Promise<Asset>;

    abstract removeAsset(id: string): Nullable<Asset> | Promise<Nullable<Asset>>;

    abstract createJob(createJobInput: CreateJobInput): Job | Promise<Job>;

    abstract updateJob(updateJobInput: UpdateJobInput): Job | Promise<Job>;

    abstract removeJob(id: string): Nullable<Job> | Promise<Nullable<Job>>;

    abstract createProfile(createProfileInput: CreateProfileInput): Profile | Promise<Profile>;

    abstract updateProfile(updateProfileInput: UpdateProfileInput): Profile | Promise<Profile>;

    abstract removeProfile(id: string): Nullable<Profile> | Promise<Nullable<Profile>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class Job {
    id: string;
    title?: Nullable<string>;
    description?: Nullable<string>;
    created_by_id?: Nullable<string>;
    assigned_to_id?: Nullable<string>;
    assigned_to?: Nullable<User>;
    created_by?: Nullable<User>;
    status?: Nullable<JobStatus>;
    type?: Nullable<JobType>;
    budget?: Nullable<number>;
    currency?: Nullable<string>;
    revision_count?: Nullable<number>;
    revision_notes?: Nullable<string>;
    created_at?: Nullable<string>;
    assets?: Nullable<Nullable<Asset>[]>;
}

export class Profile {
    id: string;
    bio?: Nullable<string>;
    userId: string;
}

export class User {
    id: string;
    email?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    role?: Nullable<Role>;
    email_verified?: Nullable<boolean>;
    created_jobs?: Nullable<Nullable<Job>[]>;
    assigned_jobs?: Nullable<Nullable<Job>[]>;
    profile?: Nullable<Profile>;
}

type Nullable<T> = T | null;
