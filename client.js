$(document).ready(function(){ //waits for DOM  (HTML & CSS) to completely load
  $('form').on('submit', function(event){   // event listener on form submission
    event.preventDefault(); //do not bring us to a new page

    // Create array of inputs, the inputs are converted to objects
    // Objects have two properties, name & value
    // eg: {name: 'firstName', name: 'lastName, value: 'Luke'}
    //name refers to name in HTML (name = "xys") in input type, not the person's name.
    console.log('form values: ', $(this).serializeArray());

    var submissionArray = $(this).serializeArray(); //[{}, {}, {}] not super useful
    var newEmployeeObject = {}; //what we want: [{firstName: Luke}, {lastName: Schlangan}]

    submissionArray.forEach(function(inputField){
      //newEmployeeObject is empty object {}
      newEmployeeObject[inputField.name] = inputField.value;
      //newEmployeeObject.firstName = Luke
      //inputField.name goes up to that first object:
      //{name: 'firstName', value: 'Luke'} in line 7 and looks for the 'name' value
      // 1st time through newEmployeeObject is {firstName: Luke}
      // 2nd time through newEmployeeObject is {firstName: Luke, lastName: Schlangan}
      // smaller objects build out one nice big readbale object to use later in code
    })



    console.log('New Employee Object: ', newEmployeeObject);

    // can write above forEach as a for loop:
    // for (var i = 0; i < submissionArray.length; i++) {
    //   var inputField = submissionArray[i]
    //   newEmployeeObject[inputField.name] = inputField.value;
    // }
    // but we're not gonna!

    // declaring variables and retrieving values from input boxes
    // var firstName = $('#firstName').val(); //var VARIABLE = $('#INPUT').val();
    // var lastName = $('#lastName').val();
    // var idNumber = $('#idNumber').val();
    // var jobTitle = $('#jobTitle').val();
    // var annualSalary = $('#annualSalary').val();
    //
    // adds new employee row to DOM. Append expects a string, converts to HTML
    $('#employeeTableBody').append(
      '<tr>' +
        '<td>' + firstName + '</td>' +
        '<td>' + lastName + '</td>' +
        '<td>' + idNumber + '</td>' +
        '<td>' + jobTitle + '</td>' +
        '<td>' + annualSalary + '</td>' +
        '<td><button class="deleteEmployeeButton" data-salary="' + annualSalary + '">DELETE ' + firstName + '</button>' + '<td>' +
      '</tr>'
    );

    //add monthly salary expenses to DOM
    var newEmployeeMonthlyExpenses = annualSalary / 12;
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(totalMonthlyExpenses);

    // clear out input boxes
    $('.employeeFormInput').val('');
  });

  // adding a listener for clicking delete employee buttons
  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){
    // removing employee salary from total
    var deletedEmployeeSalary = $(this).data('salary');
    var deletedEmployeeMonthlyExpenses = deletedEmployeeSalary / 12;
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(newTotalMonthlyExpenses);
    // selects and deletes employee row from table
    $(this).parent().parent().remove();
  });
});

// need to get monthly salary, subtract deleted annual salary information, and recalculate new monthly expenses
