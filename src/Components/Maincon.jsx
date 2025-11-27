import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import Card from './Card'

const Maincon = () => {

    const [allQuotes, setAllQuotes] = useState([])
    const [showCards, setShowCards] = useState(false)
    const [randomQuotes, setRandomQuotes] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/quotes")
            .then((res) => {
                setAllQuotes(res.data.quotes)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const generateRandomQuotes = () => {

        // FIXED LINE — do NOT mutate state
        const selected = [...allQuotes]
            .sort(() => 0.5 - Math.random())
            .slice(0, 12);

        setRandomQuotes(selected)
        setShowCards(true)
    }

    return (
        <div className='p-10'>

            {!showCards && (
                <Button text="Generate Quotes" onClick={generateRandomQuotes} />
            )}

            {showCards && (
                <Button text="Generate Another Quotes" onClick={generateRandomQuotes} />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {showCards &&
                    randomQuotes.map((item) => (
                        <Card key={item.id} quote={item.quote} author={item.author} />
                    ))
                }
            </div>

        </div>
    )
}

export default Maincon
