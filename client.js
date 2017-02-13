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
      '<td><button class="deleteEmployeeButton">DELETE ' + firstName + '</button>' + '<td>' +
      '</tr>'
    );

    //add monthly salary expenses to DOM
    var newEmployeeMonthlyExpenses = annualSalary / 12;
    var previousSalaryTotal = $('#monthlyExpenses').text();
    var totalMonthlyExpenses = parseFloat(previousSalaryTotal) + newEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(totalMonthlyExpenses);

    // clear out input boxes
    $('.employeeFormInput').val('');
  });


  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){
    console.log('Delete Button was clicked!');
    console.log($(this));
    $(this).closest('tr').remove();
  });
});
