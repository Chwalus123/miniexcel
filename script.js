const inputs = document.querySelectorAll('input[type="text"]');
      const sumA = document.getElementById("sumA");
      const sumB = document.getElementById("sumB");
      const sumC = document.getElementById("sumC");
      const avgA = document.getElementById("avgA");
      const avgB = document.getElementById("avgB");
      const avgC = document.getElementById("avgC");

      function calculateSumAndAverage() {
        let sumAValue = 0;
        let sumBValue = 0;
        let sumCValue = 0;
        let avgAValue = 0;
        let avgBValue = 0;
        let avgCValue = 0;

        inputs.forEach((input) => {
          const value = parseFloat(input.value) || 0;
          if (input.id.startsWith("a")) {
            sumAValue += value;
          } else if (input.id.startsWith("b")) {
            sumBValue += value;
          } else if (input.id.startsWith("c")) {
            sumCValue += value;
          }
        });

        const inputsLength = inputs.length / 3;
        avgAValue = sumAValue / inputsLength;
        avgBValue = sumBValue / inputsLength;
        avgCValue = sumCValue / inputsLength;

        sumA.textContent = sumAValue;
        sumB.textContent = sumBValue;
        sumC.textContent = sumCValue;
        avgA.textContent = avgAValue;
        avgB.textContent = avgBValue;
        avgC.textContent = avgCValue;
      }

      inputs.forEach((input) => {
        input.addEventListener("input", calculateSumAndAverage);
      });