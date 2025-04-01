import React from 'react';
import {
    FaUser,
    FaLock,
    FaComments,
    FaBell,
    FaKeyboard,
    FaQuestionCircle,
    FaSignOutAlt,
} from 'react-icons/fa';

import styles from './setting.module.css';

const SettingsPage = () => {
    const handleLogout = async () => {
            const res = await fetch("http://localhost:8000/logout", {
              method: "get",
              headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
        if (res.status == 200) {
            window.location.href = "/";
        }
    }
    return (
        <div className={styles.settingsContainer}>
            <h2 className={styles.title}>Settings</h2>

            <div className={styles.profileSection}>
                <img
                    src="data:image/jpeg;base64,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"
                    alt="Profile"
                    className={styles.profileImage}
                />
                <div>
                    <h3 className={styles.profileName}>Munishwar Kalra</h3>
                    <p className={styles.profileSubName}>むにしわる</p>
                </div>
            </div>
              <div className={styles.remaining}>
            <ul className={styles.settingsList}>
                <SettingItem icon={<FaUser />} text="Account" />
                <SettingItem icon={<FaLock />} text="Privacy" />
                <SettingItem icon={<FaComments />} text="Chats" />
                <SettingItem icon={<FaBell />} text="Notifications" />
                <SettingItem icon={<FaKeyboard />} text="Keyboard shortcuts" />
                <SettingItem icon={<FaQuestionCircle />} text="Help" />
            </ul>

            <div className={styles.logoutButton}>
                <FaSignOutAlt className={styles.logoutIcon} />
                <span onClick={handleLogout}>Log out</span>
            </div> 
            </div>
        </div>
    );
};

const SettingItem = ({ icon, text }) => {
    return (
        <li className={styles.settingsItem}>
            <span className={styles.settingsItemIcon}>{icon}</span>
            <span className={styles.settingsItemText}>{text}</span>
        </li>
    );
};

export default SettingsPage;
