import React, {useState} from 'react';
import styles from './App.module.scss';
import Preloader from "../Preloader/Preloader";

const App = () => {
    const [loading, setLoading] = useState(true);

    if (loading) {
        return <Preloader/>
    }

    return (
        <div>
            Ama App
        </div>
    );
};

export default App;