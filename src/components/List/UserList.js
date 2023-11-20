'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Icon from "/public/user_icon.png";
import Gmap from "/public/map.png";
import Image from "next/image";

function UserList({ users }) {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) => {
        // Check if it checked
        if (selectedUser && selectedUser.id === user.id) {
            // if already selected, just cancel it
            setSelectedUser(null);
        } else {

            setSelectedUser(user);
        }
    };

    return (
        <div className={styles.container}>
            <br/>
            <br/>
            <br/>
            
            <div className={styles.listSection}>
            <div className={styles.userListHeader}>
                <div className={styles.columnHeader}>Name</div>
                <div className={styles.columnHeader}>Username</div>
                <div className={styles.columnHeader}>Email</div>
            </div>
                {users.map(user => (
                    <div 
                        key={user.id} 
                        className={`${styles.row} ${selectedUser && selectedUser.id === user.id ? styles.selected : styles.unselected}`} 
                        onClick={() => handleUserClick(user)}
                    >
                        <div className={styles.column}>{user.name}</div>
                        <div className={styles.column}>{user.username}</div>
                        <div className={styles.column}>{user.email}</div>
                        
                    </div>
                ))}
            </div>
            {selectedUser && (
                
                <div className={styles.detailSection}>
                    <h2>Details for {selectedUser.name}</h2>
                    <p>{selectedUser.username}</p>
                    <p>{selectedUser.email}</p>
                    <div className={styles.image}>
                            <Image src={Icon} height={150}/>
                    </div>
                    <p>The Address: {selectedUser.address.street}, {selectedUser.address.suite}</p> <p>{selectedUser.address.city},{selectedUser.address.zipcode}</p>
                    
                    
                    <div className={styles.image_map}>
                            <Image src={Gmap} height={260} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserList;
