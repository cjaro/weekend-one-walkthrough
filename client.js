$(document).ready(function(){ //waits for DOM  (HTML & CSS) to completely load
  $('#submitNewEmployee').on('click', function(){   // event listener on submitNewEmployee button
    // declaring variables and retrieving values from input boxes
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

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
