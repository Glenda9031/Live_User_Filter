const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

GetData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
}