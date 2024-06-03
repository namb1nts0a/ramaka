import React, {useEffect, useState} from 'react';
import {getFastFood} from '../../services/api';


const FastFoodList = () => {
    const [fastFoods, setFastFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getFastFood()
            .then(response => {
                setFastFoods(response.data.elements);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching fast food: ', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading ....</p>
    }
    if (error) {
        return <p>Error : {error.message}</p>
    }

    return (
        <div>
            <h1>Fast food in Fianarantsoa</h1>
            <ul>
                {fastFoods.map(fastFood => (
                    <li key={fastFood.id}>
                        {fastFood.tags?.name || 'Unnamed Fast Food'} - {fastFood.tags?.amenity}
                    </li>
                ))};
            </ul>
        </div>
    );

};

export default FastFoodList;