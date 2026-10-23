import React from 'react'
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
                User Cards
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <UserCard name="Aubin" email="aubin@example.com" street="Ngaran" city="Semarang"/>
                <UserCard name="Daffa" email="daffa@example.com" street="Jl.Gurita" city="Ungaran"/>
                <UserCard name="Al Ghozy" email="alghozy@example.com" street="Cipto" city="Demak"/>
            </div>
        </div>
    </>
  );
}

export default Exercise
