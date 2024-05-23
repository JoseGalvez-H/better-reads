import React, { useState } from 'react';
import Select from 'react-select'; // Import the Select component
import './ProfilePage.css';
import BookCard from '../../components/BookCard/BookCard';
import Modal from '../../components/Modal/Modal';

export default function ProfilePage({ user }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState('');

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const updateUserDetails = (updatedDetails) => {
    console.log('Updated user details:', updatedDetails);
    toggleEditModal();
  };

  return (
    <div className="container">
      <div className="user-info-box">
        <img
          style={{ borderRadius: '50%' }}
          src="../../../public/images/avatars/woman_01.svg"
          alt={`${user.name}'s avatar`}
        />
        <h1>{user.name}</h1>
        <div className="user-subdetails">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Birthday:</strong> {user.birthday || 'Not Provided'}
          </p>
          <button onClick={toggleEditModal}>Edit User Details</button>
        </div>
      </div>
      <div className="recent-reads">
        <h2>Recently Read</h2>
      </div>
      <div className="lists">
        <h2>Book Lists</h2>
        <div className="list">
          <h3>Reading</h3>
          <BookCard />
        </div>
        <div className="list">
          <h3>Next Up</h3>
          <BookCard />
        </div>
        <div className="list">
          <h3>Favorites</h3>
          <BookCard />
        </div>
        <div className="list">
          <h3>Never Again</h3>
          <BookCard />
        </div>
      </div>
      <Modal isOpen={isEditModalOpen} onClose={toggleEditModal}>
        <h2>Edit User Details</h2>
        <form action="">
          <label>Name:</label>
          <input type="text" value="" />
          <label>Email:</label>
          <input type="text" value="" />
          <label>Avatar:</label>
        </form>
        <button onClick={updateUserDetails}>Save Changes</button>
      </Modal>
    </div>
  );
}
