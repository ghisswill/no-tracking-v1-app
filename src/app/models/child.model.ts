export interface MenuItem {
    icon: string;
    label: string;
    children?: MenuItem[];
    isOpen?: boolean;
} 

export interface Child {
    icon?: string;
    label: string;
}