document.getElementById("cep").addEventListener("blur", function () {
    const cep = this.value.replace(/\D/g, "");
    if (cep.length === 8) {
        fetch(`viacep.com.br/ws/01001000/json/`)
            .then(response => {
                if (!response.ok) throw new Error("CEP não encontrado.");
                return response.json();
            })
            .then(data => {
                if (data.erro) {
                    alert("CEP não encontrado.");
                    return;
                }

            
                document.getElementById("endereco").value = data.logradouro || "";
                document.getElementById("bairro").value = data.bairro || "";
                document.getElementById("cidade").value = data.localidade || "";
                document.getElementById("estado").value = data.uf || "";
            })
            .catch(error => {
                console.error("Erro ao buscar o CEP:", error.message);
                alert("Erro ao buscar o CEP.");
            });
    } else {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
    }
});

