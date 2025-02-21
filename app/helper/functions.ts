import { faker } from "@faker-js/faker";

interface User {
    firstname: string,
    lastname: string,
    username: string,
    profile: string,
}

interface Post {
    user: User;
    posted_img: string;
    date_posted: Date;
    likes: number;
    descriptions: string;
}

interface Story {
    user: User,
    story_img: string,
}

interface Suggestion {
    user: User,
    followed_by: User[],
}


export function createRandomUser(): User {

    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const username = faker.internet.username().toLowerCase();

    return {
        firstname,
        lastname,
        username,
        profile: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement(["men", "women"])}/${faker.number.int(99)}.jpg`,
    }
}

export function createRandomPost(): Post {
    return {
        user: createRandomUser(),
        posted_img: `https://picsum.photos/800/600?random=${faker.number.int(1000)}`,
        date_posted: faker.date.recent(),
        likes: faker.number.int(1000),
        descriptions: faker.lorem.sentence(),
    }
}

export function createRandomStory(): Story {
    return {
        user: createRandomUser(),
        story_img: `https://picsum.photos/800/600?random=${faker.number.int(1000)}`,
    }
}

export function createRandomSuggestion(): Suggestion {
    return {
        user: createRandomUser(),
        followed_by: Array.from({ length: faker.number.int({ min: 1, max: 99 }) }, () => createRandomUser()), // Random followers (1-5 users)
    }
}

export function formatFollowers(followers: User[]): string   {
    if (followers.length === 0) 
        return `Followed by no one`;

    if (followers.length === 1) 
        return `Followed by ${followers[0].username}`;

    return `Followed by ${followers[0].username} + ${followers.length - 1} more`;
}

export function timeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime(); // Get time difference in milliseconds
    const diffSec = Math.floor(diffMs / 1000); // Convert to seconds
    const diffMin = Math.floor(diffSec / 60); // Convert to minutes
    const diffHrs = Math.floor(diffMin / 60); // Convert to hours
    const diffDays = Math.floor(diffHrs / 24); // Convert to days

    if (diffDays > 0) return `${diffDays}d`; // If more than a day, show days
    if (diffHrs > 0) return `${diffHrs}h`; // If more than an hour, show hours
    if (diffMin > 0) return `${diffMin}m`; // If more than a minute, show minutes
    return `${diffSec}s`; // If less than a minute, show seconds
}

