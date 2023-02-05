import React from 'react';
import { useRouter } from 'next/router';
import { tables } from '@ui/Table/sample';
import Header from '@/../../packages/ui/Header';

const Table = () => {
    const router = useRouter();
    const [tableNmae, setTableName] = React.useState<string>('');

    React.useEffect(() => {
        if (router.query.id) {
            const name = (router.query.id as string).toLowerCase();
            setTableName(name);
        }
    }, [router]);

    const showComponent = (name: string) => {
        const tableKeys = Object.keys(tables);
        if (tableKeys.includes(name)) {
            return tables[name.toLowerCase()];
        } else {
            return <div className="p-4">wrong url address</div>;
        }
    };

    return (
        <div>
            <Header />
            <div className="p-4 text-4xl text-indigo-500 tracking-wider">
                {tableNmae.toUpperCase()}
            </div>
            <div>{showComponent(tableNmae)}</div>
        </div>
    );
};

export default Table;
