import React from 'react'

export const ColRow = ({ coin, index }) => {
    return (
        <>
            <tr>
                <td>{index}</td>
                <td>
                    <img src={coin.image} alt={coin.name} style={{ maxWidth: '22px' }} className='me-2' />
                    <span>{coin.name}</span>
                </td>
                <td>{coin.current_price} €</td>
                <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                    {coin.price_change_percentage_24h}
                </td>
            </tr>
        </>
    )
}
