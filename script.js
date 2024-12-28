function createTable() {
    const numSubjects = document.getElementById('num-subjects').value;
    const container = document.getElementById('grades-container');

    // Clear the previous table if any
    container.innerHTML = '';

    if (numSubjects > 0) {
        const table = document.createElement('table');
        const header = document.createElement('tr');
        header.innerHTML = `
            <th>علامة المادة</th>
            <th>النتيجة</th>
        `;
        table.appendChild(header);

        for (let i = 0; i < numSubjects; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><input type="number" class="grade" id="grade${i}" placeholder="علامة المادة" /></td>
                <td><input type="number" class="result" id="result${i}" placeholder="النتيجة" disabled /></td>
            `;
            table.appendChild(row);
        }
        container.appendChild(table);
    }
}

function calculateGrade() {
    const numSubjects = document.getElementById('num-subjects').value;
    let totalGrade = 0;
    let totalResult = 0;

    for (let i = 0; i < numSubjects; i++) {
        const grade = parseFloat(document.getElementById(`grade${i}`).value);
        const result = parseFloat(document.getElementById(`result${i}`).value);

        if (!isNaN(grade) && !isNaN(result)) {
            totalGrade += grade;
            totalResult += result;
        }
    }

    const averageGrade = (totalGrade / numSubjects).toFixed(2);
    const averageResult = (totalResult / numSubjects).toFixed(2);

    const resultElement = document.getElementById('result');
    resultElement.textContent = `المعدل النهائي: ${averageResult}%`;

    if (averageResult >= 50) {
        resultElement.classList.add('green');
        resultElement.classList.remove('red');
    } else {
        resultElement.classList.add('red');
        resultElement.classList.remove('green');
    }
}
