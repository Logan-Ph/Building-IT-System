import { Table } from 'flowbite-react';

export function LightModeTable({ className, ...props }) {
    return <Table {...props} className={`bg-white text-black ${className}`} />;
}