import axios from "axios"
import { checkAccess } from "./utils/token";
import { getData } from "./utils/api";


checkAccess()


const transactions = [
    {
        id: '1232312',
        wallet: 'VISA',
        category: 'Автомобиль',
        amount: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: '1232313',
        wallet: 'VISA',
        category: 'Автомобиль',
        amount: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: '1232314',
        wallet: 'VISA',
        category: 'Автомобиль',
        amount: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: '1232315',
        wallet: 'VISA',
        category: 'Автомобиль',
        amount: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: '1232316',
        wallet: 'VISA',
        category: 'Автомобиль',
        amount: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: '1232317',
        wallet: 'VISA',
        category: 'Автомобиль',
        amount: '414,000,000',
        time: '4 дня назад'
    }
];


function populateTransactionTable() {
    const tableBody = document.querySelector("#transactions-table tbody");

    transactions.forEach(transaction => {
        const row = document.createElement("tr");

        // Create each cell for the row
        const idCell = document.createElement("td");
        idCell.textContent = transaction.id;
        row.appendChild(idCell);

        const walletCell = document.createElement("td");
        walletCell.textContent = transaction.wallet;
        row.appendChild(walletCell);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = transaction.category;
        row.appendChild(categoryCell);

        const amountCell = document.createElement("td");
        amountCell.textContent = transaction.amount;
        row.appendChild(amountCell);

        const timeCell = document.createElement("td");
        timeCell.textContent = transaction.time;
        row.appendChild(timeCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

populateTransactionTable()


function showUser(user) {
    document.querySelector(".menu_left a").textContent = user.email;

    document.querySelector(".welcome-message h1").textContent = `Добро пожаловать, ${user.surname} ${user.lastname}!`;
    document.querySelector(".welcome-message .email").textContent = user.email;
}

let userId = localStorage.getItem("userId");


getData(`users/${userId}`)
    .then(res => showUser(res.data))
    .catch(err => console.error(err));


