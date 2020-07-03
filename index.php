<!DOCTYPE html>
<html>

<head>
    <title>
        Calculadora Estatística
    </title>
    <link rel="icon" href="./calculadora-icon.ico">
    <link rel="stylesheet" type="text/css" href="./style/base_style.css">
    <link rel="stylesheet" type="text/css" href="./style/nav_bar_style.css">
    <link rel="stylesheet" type="text/css" href="./style/variables_style.css">
</head>

<body>
    <main>
        <div>
            <div class="nav-bar-base">
                <a class="nav-bar-item" onclick="toggleTab(this, 'calculator-tab')" style="background-color:#111;" href="#home">Calculadora</a></li>
                <a class="nav-bar-item" onclick="toggleTab(this, 'about-tab')" href="#about">Sobre</a>
            </div>
        </div>
        <div id="calculator-tab" class="tab-content">
            <div style="padding-left: 15px;">
                <h2 style="margin-bottom: 0;">Medidas descritivas</h2>
            </div>
            <div class="variables-box">
                <div>
                    <span class="variable-label">
                        Média:
                    </span>
                    <span id="mean"></span>
                </div>
                <div>
                    <span class="variable-label">
                        Moda:
                    </span>
                    <span id="mode"></span>
                </div>
                <div>
                    <span class="variable-label">
                        Mediana:
                    </span>
                    <span id="median"></span>
                </div>
                <div>
                    <span class="variable-label">
                        Amplitude:
                    </span>
                    <span id="spread"></span>
                </div>
            </div>
            <div class="variables-box">
                <div>
                    <span class="variable-label">
                        Variança:
                    </span>
                    <span id="variance"></span>
                </div>
                <div>
                    <span class="variable-label">
                        Desvio Padrão:
                    </span>
                    <span id="standard-deviation"></span>
                </div>
                <div>
                    <span class="variable-label">
                        Coeficiente de Variação:
                    </span>
                    <span id="coefficient-of-variation"></span>
                </div>
            </div>
            <div id="chart-div"></div>
            <textarea id="values" placeholder="Digite aqui os valores que devem ser considerados separados por vírgula"></textarea><br>
            <span id="validation-message" style="display: none; font-size: 12px; color: red; margin-bottom: 10px">*Digite valores válidos</span>
            <input onclick="calculate()" class="button" style="display: block;" type="button" value="Calcular">
        </div>
        </div>
        <div id="about-tab" style="display: none;" class="tab-content">
            <h2>
                O que é a Calculadora Estatística ?
            </h2>
            <p>
                A Calculadora Estatística é um site onde você pode obter uma série de medidas descritivas populacionais
                de um conjunto de valores definidos pelo usuário.
            </p>
            <p>
                Com a calculadora é possível saber a média, a moda, a mediana, a
                amplitude, a variança, o desvio padrão e o Coeficiente de variação do conjunto de valores.
            </p>
            <h2>Tecnologias utilizadas</h2>
            <ul>
                <li>
                    <p>
                        HTML 5
                    </p>
                </li>
                <li>
                    <p>
                        CSS
                    </p>
                </li>
                <li>
                    <p>
                        Javascript
                    </p>
                </li>
                <li>
                    <p>
                        Chart.js
                    </p>
                </li>
            </ul>
            <p style="font-weight: bold;">
                *Desenvolvido por João Salomão em 2020/1
            </p>
        </div>
    </main>
</body>

<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script type="text/javascript" src="./js/calculator.js"></script>
<script type="text/javascript" src="./js/dom-manipulator.js"></script>

</html>