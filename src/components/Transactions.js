/* 
Transactions Component Does: 

Renders: 
takes in Transactions objects

fitler() takes in {transactions} takes out 10 form arr[]
then sorts them based on value amount low to high value
pushes the arr to sortedExpenses[]

SetIcon() takes in Item runs through for matches and returns the Icons from
font awesome classes that match
I pass this to SetIcon() in className to create the icons rather then HARDCODING!!!
I HATE HARDCODING !!!!

*/


import React from 'react';

function Transactions({ transactions }) {
    const sortedExpenses = []

    const filter = (data) => {
        const sortedTransactions = data
            .sort((a, b) => b.amount.value - a.amount.value)
            for (let i = 0; i < data.length; i++) {
                data[i].category_title.toLowerCase() === "income" ? data.splice([i],1)  : data ;
              }
        return sortedExpenses.push(...sortedTransactions)
    }


    const setIcon = (Item) => {
        var category_title = {
            'Shopping': 'fas fa-shopping-cart',
            'Entertainment': 'fas fa-film',
            'Groceries': 'fas fa-shopping-basket',
            'Bills': 'fas fa-file-invoice',
            'Eating Out': 'fas fa-utensils',
            'Transport': 'fas fa-subway',
            'Income': 'fas fa-coins',
            'default': 'fas fa-question'
        };
        return (category_title[Item] || category_title['default']);
    }


    filter(transactions)

    return (
        <div className="container__card--transactions">
            <h2 className="title ma-top-3">Expenses</h2>
            <div className="m-top-3">
                {
                    sortedExpenses.splice(0,10).map((item, i) => {
                        return (
                            <div key={i} className="flex-grid">
                                <div className="col center">
                                    <i className={setIcon(item.category_title)}></i>
                                </div>
                                <div className="col">
                                    <div className="card-group">
                                        <p className="card-group--title">{item.description}</p>
                                        <div className="card-group--items">
                                            <p>{item.category_title}</p>
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <p className="price">{item.amount.value}</p>
                                </div>
                                <div>
                                </div>
                            </div>


                        )
                    })

                }
            </div>
        </div>
    );
}

export default Transactions;
