

export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate: string;
    createdBy: string;
}

export interface  User {
    id:'string';
    name: string;
    email: 'string';
}

export interface AppState {
    tasks: Task[];
    currentUser: User | null;
}