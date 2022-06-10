(function() 
 {
  var allQuestions = [{
    question: "Who is number 1 worst Malware in the History",
    options: ["Sasser", "Klez", "Covid19", "ILOVEYOU"],
    answer: 1
  }, {
    question: "What does Worm do to your computer",
    options: ["Spread Slower", "Eat your Computer", "Can be remotely controlled", "Is not able to self replicate"],
    answer: 2
  }, {
    question: "Where does ILOVEYOU Malware origin",
    options: ["Phillipine", "Korea", "Singapore","North Korea"],
    answer: 0
  },{
    question: "Which is the correct type of computer virus ?",
    options: ["File infector Virus", "The Black Plague", "SARS", "MyDoom"],
    answer: 0
  }, {
    question: "How to protect your computer from Trojan",
    options: ["Install Anti-virus", "Ignore", "Download from malicious website", "Uhh"],
    answer: 0
  },{
    question: "Which of the anwers is incorrect about prevention",
    options: ["Update latest antivirus", "Always turn on Firewall", "Remove unused programs", "Keep your password as short as possible and dont change it"],
    answer: 3
  }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');

    nextQuestion();
 
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
      return score;

  }
})();