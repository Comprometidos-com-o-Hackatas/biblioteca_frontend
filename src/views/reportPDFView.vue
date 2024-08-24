<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { computed } from 'vue';

const dados = ref('')

// Conteúdo HTML inicial
const htmlContent = computed(() => {
    const pdf = ref(`
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; margin: 40px; }
                    h1 { color: #333; }
                    p { font-size: 14px; }
                </style>
            </head>
            <body>
                <h1>Relatório de PDF</h1>
                <p>`+ dados.value + `</p>
            </body>
        </html>
    `)
    return pdf.value
});

const generatePDF = async () => {
    try {
        // Fazendo o poste definindo que a respota deve ser em binário
        const response = await axios.post('http://localhost:8000/generate-pdf/', { html: htmlContent.value }, { responseType: 'blob'});

        // Criando um link para o download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'report.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
    }
}
</script>

<template>
    <div>
        <h2>Edite o conteúdo do relatório que será gerado</h2>
        <textarea v-model="dados" rows="10" cols="50"></textarea>
        <br/>
        <button style="margin-left: 3rem;" @click="generatePDF">Gerar PDF</button>
    </div>
</template>