export type UserProps = {
    userId: number;
    avatar: string;
    email: string;
    login: string;
    display_name: string;
    first_name: string; 
    phone: string;
};

export type UserStatProps = {
    userId: number;
    totalScore: number;
    bestGame: number;
    winnerCount: number;
    defeatCount: number;
    winRate: number;
};


export const userData: UserProps = {
    userId: 1,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TjyxXhIkwiNE1996F349Lr8xRDEyQ7r6cA&usqp=CAU",
    email: "email@SizeContext.com",
    login: "UserLogin",
    display_name: "UserNickname",
    first_name: "Nik",
    phone: "+79999999999"
};

export const userStatData: UserStatProps = {
    userId: 1,
    totalScore: 50,
    bestGame: 552,
    winnerCount: 10,
    defeatCount: 55,
    winRate: 72
}
