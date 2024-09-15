import React from 'react';
import Card from './Card';

function Planets() {
    return (
        <>
            <div className="h-[84vh] flex items-center justify-center p-4 mt-56">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 max-w-screen-lg w-full">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default Planets;
