describe("Pair Programming", () => {
    describe("Declarando variables", () => {
        describe("1.- variable tipo let de nombre 'variableSinValor' está declarada sin valor", () => {
            it("Es de tipo let", () => {
                expect(() => {
                    try {
                        let oldValue = variableSinValor
                        variableSinValor++;
                        variableSinValor = oldValue;
                    }
                    catch {
                        throw ("variable de tipo const");
                    }
                }).not.toThrow();
            });
            it("no tiene valor asignado", () => {
                expect(variableSinValor).toBeUndefined();
            });
        });
        describe("2.- 2 variables tipo let de nombres 'booleano1' y 'booleano2' está declarada y es de tipo booleano", () => {
            it("booleano1 es de tipo let", () => {
                expect(() => {
                    try {
                        let oldValue = booleano1;
                        booleano1++;
                        booleano1 = oldValue;
                    }
                    catch {
                        throw ("variable de tipo const");
                    }
                }).not.toThrow();
            });
            it("booleano1 es booleano", () => {
                expect(booleano1).toEqual(jasmine.any(Boolean));
            });
            it("booleano2 es de tipo let", () => {
                expect(() => {
                    try {
                        let oldValue = booleano2;
                        booleano2++;
                        booleano2 = oldValue;
                    }
                    catch {
                        throw ("variable de tipo const");
                    }
                }).not.toThrow();
            });
            it("booleano2 es booleano", () => {
                expect(booleano2).toEqual(jasmine.any(Boolean));
            });
        });
        describe("3.- variable tipo const de nombre 'PI' está declarada con valor de 3,14", () => {
            it("Es de tipo const", () => {
                expect(() => {
                    try {
                        let oldValue = PI;
                        PI++;
                        PI = oldValue;
                    }
                    catch {
                        throw ("variable de tipo const");
                    }
                }).toThrow();
            });
            it("tiene valor 3.14", () => {
                expect(PI).toBe(3.14);
            });
        });
        describe("4.- variable tipo const de nombre 'TAU' está declarada con valor de 2 veces PI", () => {
            it("Es de tipo const", () => {
                expect(() => {
                    try {
                        let oldValue = TAU;
                        TAU++;
                        TAU = oldValue;
                    }
                    catch {
                        throw ("variable de tipo const");
                    }
                }).toThrow();
            });
            it("tiene valor 2PI", () => {
                expect(TAU).toBe(2 * PI);
            });
        });
    });

    describe("Booleanos", () => {
        it("5.- variable 'booleanoAnd' cuyo valor sea la comparación booleana 'booleano1 and booleano2'", () => {
            expect(booleanoAnd).toBe(booleano1 && booleano2);
        });
        it("6.- variable 'booleanoNot' cuyo valor sea la comparación booleana 'no booleano1'", () => {
            expect(booleanoNot).toBe(!booleano1);
        });
        it("7.- variable 'booleanoMix0' cuyo valor sea la comparación booleano '(booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)'", () => {
            expect(booleanoMix0).toBe((booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2)));
        });
    });
    describe("Operadores", () => {
        describe("8.- crea la variable 'incrementarDesp' con valor 2 y asigna su valor con postincremento a 'resultadoDesp'", () => {
            it("incrementarDesp vale 2", () => {
                expect(incrementarDesp).toBe(3);
            });
            it("resultadoDesp tienen el valor correcto", () => {
                expect(resultadoDesp).toBe(2);
            });
        });
        describe("9.- crea la variable 'incrementarAntes' con valor 2 y asigna su valor con preincremento a 'resultadoAntes'", () => {
            it("incrementarAntes vale 2", () => {
                expect(incrementarAntes).toBe(3);
            });
            it("resultadoAntes tienen el valor correcto", () => {
                expect(resultadoAntes).toBe(3);
            });
        });
    });
    describe("Bucles", () => {
        it("10.- crea la variable 'contarHasta10_2' con valor 0 e incrementa su valor con un bucle for hasta que se verifique contarHasta10_2 === 10", () => {
            expect(contarHasta10_2).toBe(10);
        });
        it("11.- Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de postI el valor de postJ++", () => {
            let i = 0, j = 0, k = 0;;
            while (k <= 10)
            {
                k++;
                i += j++;
            }
            expect(postI === i && postJ === j).toBeTruthy();
        });
        it("12.- crea la variable 'sumaPares' con valor 0 a continuación crea un bucle que itere 10 veces (i < 10), si la iteración es par se deberá asumar a sumaPares el número de la iteración actual (i)", () => {
            let i = 0, res = 0;
            while (i < 10) {
                if (i % 2 === 0)
                    res += i;
                i++;
            }
            expect(sumaPares).toBe(res);
        });
    });
});
describe("proyecto", () => {
    describe("Declarando variables", () => {
        describe("13.- variable tipo let de nombre 'variableValorNumerico' está declarada con valor numérico", () => {
            it("Es de tipo let", () => {
                expect(() => {
                    try {
                        let oldValue = variableValorNumerico;
                        variableValorNumerico++;
                        variableValorNumerico = oldValue;
                    }
                    catch {
                        throw ("variable de tipo const");
                    }
                }).not.toThrow();
            });
            it("tiene valor numérico", () => {
                expect(variableValorNumerico).toEqual(jasmine.any(Number));
            });
        });
        describe("14.- variable tipo const de nombre 'MiNombre' está declarada con valor de tu nombre", () => {
            it("Es de tipo const", () => {
                expect(() => {
                    try {
                        let oldValue = MiNombre;
                        MiNombre++;
                        MiNombre = oldValue;
                    }
                    catch {
                        throw ("variable de tipo const");
                    }
                }).toThrow();
            });
            it("tiene valor cadena de texto", () => {
                expect(MiNombre).toEqual(jasmine.any(String));
            });
        });
        describe("15.- variable tipo const de nombre 'MiNumeroFav' está declarada con valor numérico", () => {
            it("Es de tipo const", () => {
                expect(() => {
                    try {
                        let oldValue = MiNumeroFav;
                        MiNumeroFav++;
                        MiNumeroFav = oldValue;
                    }
                    catch {
                        throw ("variable de tipo const")
                    }
                }).toThrow();
            });
            it("tiene valor numérico", () => {
                expect(MiNumeroFav).toEqual(jasmine.any(Number));
            });
        });
    });

    describe("Booleanos", () => {
        it("16.- variable 'booleanoOr' cuyo valor sea la comparación booleana 'booleano1 or booleano2'", () => {
            expect(booleanoOr).toBe(booleano1 || booleano2);
        });
        it("17.- variable 'booleanoMix1' cuyo valor sea la compración booleana '(booleano1 and TAU/2 sea igual a PI) or (variableValorNumerico mayor o igual que MiNumeroFav)'", () => {
            expect(booleanoMix1).toBe((booleano1 && TAU / 2 === PI) || (variableValorNumerico >= MiNumeroFav));
        });
        it("18.- variable 'seisNoEsNueve' cuyo valor sea la comparación booleana '6 no es igual que 9'", () => {
            expect(seisNoEsNueve).toBe(6 !== 9);
        });
        it("19.- variable 'booleanoMix2' cuyo valor sea la comparación booleana 'variableValorNumerico positivo o menor que -(MiNumeroFav * TAU)", () => {
            expect(booleanoMix2).toBe(variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU));
        });
    });

    describe("Operadores", () => {
        it("20.- variable 'valorSuma' cuyo valor sea la suma de MiNumeroFav y variableValorNumerico", () => {
            expect(valorSuma).toBe(MiNumeroFav + variableValorNumerico);
        });
        it("21.- variable 'valorResta' cuyo valor sea la resta de MiNumeroFav menos variableValorNumerico", () => {
            expect(valorResta).toBe(MiNumeroFav - variableValorNumerico);
        });
        it("22.- variable 'valorMultiplicacion' cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico", () => {
            expect(valorMultiplicacion).toBe(MiNumeroFav * variableValorNumerico);
        });
        it("23.- variable 'valorDivision' cuyo valor sea la division de MiNumeroFav entre 3", () => {
            expect(valorDivision).toBe(MiNumeroFav / 3);
        });
    });

    describe("Bucles", () => {
        it("24.- crea la variable 'contarHasta10' con valor 0 e incrementa su valor con un bucle while hasta que se verifique contarHasta10 === 10", () => {
            expect(contarHasta10).toBe(10);
        });
        it("25.- Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ", () => {
            let i = 0, j = 0, k = 0;
            while (k <= 10)
            {
                k++;
                i += ++j;
            }
            expect(preI === i && preJ === j).toBeTruthy();
        });
        it("26.- crea la variable 'sumaImpares' con valor 0 a continuación crea un bucle que itere 10 veces (i < 10), si la iteración es impar se deberá asumar a sumaPares el número de la iteración actual (i)", () => {
            let i = 0, res = 0;
            while (i < 10)
            {
                if (i % 2 === 1)
                    res += i;
                i++;
            }
            expect(sumaImpares).toBe(res);
        });
    });
});
