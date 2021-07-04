import { Injectable } from '@angular/core';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root',
})
export class PdfService {

  // head = [['ID', 'NAME', 'DESIGNATION', 'DEPARTMENT']]
  // data = [     [1, 'ROBERT', 'SOFTWARE DEVELOPER', 'ENGINEERING'],     [2, 'CRISTINAO','QA', 'TESTING'],     [3, 'KROOS','MANAGER', 'MANAGEMENT'],     [4, 'XYZ','DEVELOPER', 'DEVLOPEMENT'],     [5, 'ABC','CONSULTANT', 'HR'],     [73, 'QWE','VICE PRESIDENT', 'MANAGEMENT'],   ]

  public exportPDF(data) {
    const { head, body } = data;
    let doc = new jsPDF();
    (doc as any).autoTable({
      head: head,
      body: body,
      theme: 'plain', //mirar propiedades para dar estilo
      didDrawCell: data => {
        console.log(data.column.index)
      }
    });
    doc.save();

  }

}
