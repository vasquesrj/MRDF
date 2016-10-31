var estrevistado = 
			{
				cpf: String,
				nome: String,
				endereco: 
					{
						logradouro: String,
						numero: String,
						complemento: String,
						bairro: String,
						municipio: String,
						cep: String
					},
				dataNascimento: Date,
				estadoCivil: Boolean,
				sexo: Boolean,
				familiares: 
					[
						{
							nome: String, 
							parestesco: String, 
							cpf: String,
							grauDeInstrucao: String,
							statusEstudos: String,
							profissao: String,
							trabalho: Boolean,
							renda: Number,
							dataNascimento: Date,
							deficiencia: Boolean,
							tipoDeficiencia: String,
							infermidade: Boolean,
							infermidadePreExistente: String,
							residenciaPropria: Boolean,
							programaDoGoverno: Boolean,
							nomeProgramaDoGoverno: String,
							religiao: Boolean,
							ativoReligiao: Boolean,
							nomeReligiao: String,
							processoJudicial: Boolean,
							natureza: String,
							tipoSanguineo: String,
							taxaColesterol: String,
							doador: Boolean,
							tipoDoador: String,
							remedioContinuo: Boolean,
							nomeRemedioContinuo: [],
							valorRemedioContinuo: Number,
							restricaoFinanceira: Boolean,
							contato: [],
							vicio: Boolean,
							tipoVicio: String

						}
					],

				grauDeInstrucao: String,
				statusEstudos: String,
				profissao: String,
				trabalho: Boolean,
				renda: Number,
				dataNascimento: Date,
				deficiencia: Boolean,
				tipoDeficiencia: String,
				infermidade: Boolean,
				infermidadePreExistente: String,
				residenciaPropria: Boolean,
				programaDoGoverno: Boolean,
				nomeProgramaDoGoverno: String,
				religiao: Boolean,
				ativoReligiao: Boolean,
				nomeReligiao: String,
				processoJudicial: Boolean,
				natureza: String,
				tipoSanguineo: String,
				taxaColesterol: String,
				doador: Boolean,
				tipoDoador: String,
				remedioContinuo: Boolean,
				nomeRemedioContinuo: [],
				valorRemedioContinuo: Number,
				restricaoFinanceira: Boolean,
				contato: [],
				vicio: Boolean,
				tipoVicio: String,
				fotos: [{local: String , foto: Buffer}]

			}

 