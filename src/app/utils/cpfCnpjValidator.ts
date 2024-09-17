import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cpfCnpjValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) {
    return null; // Deixe que o 'required' lidere com campo vazio
  }

  // Remover caracteres não numéricos
  const sanitizedValue = value.replace(/[^\d]/g, '');

  // Valida CPF (11 dígitos) ou CNPJ (14 dígitos)
  if (sanitizedValue.length === 11) {
    return validateCPF(sanitizedValue) ? null : { invalidCPF: true };
  } else if (sanitizedValue.length === 14) {
    return validateCNPJ(sanitizedValue) ? null : { invalidCNPJ: true };
  }

  return { invalidDocument: true }; // Nem CPF nem CNPJ válido
}

function validateCPF(cpf: string): boolean {
  // Implementar a lógica de validação de CPF aqui
  // Esta é uma versão simplificada
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  // Adicionar a validação completa para CPF (com cálculo de dígitos verificadores)
  return true;
}

function validateCNPJ(cnpj: string): boolean {
  // Implementar a lógica de validação de CNPJ aqui
  // Esta é uma versão simplificada
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
  // Adicionar a validação completa para CNPJ (com cálculo de dígitos verificadores)
  return true;
}
