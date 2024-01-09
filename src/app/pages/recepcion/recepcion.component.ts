import { Component, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'recepcion-cmp',
    templateUrl: 'recepcion.component.html',
    styleUrls: ['./recepcion.component.scss']
})

export class RecepcionComponent{
  constructor(private toastr: ToastrService) {}
  faCoffee = faCoffee;

  @Input() activeId: any = 0;

  seccionActiva= 'ingreso';
  acordeonActivo: number | null = null;
  codigoBarrasValija: string = '';

  mostrarIngreso() {
    this.activeId = '1';
    this.seccionActiva = 'ingreso';
  }

  mostrarHistorial() {
    this.activeId = '2';
    this.seccionActiva = 'historial';
  }

  valijas = [
    { id:1, valija: 'Valija1', origen: 'Origen1', usuario: 'Usuario1', fechaHora: '2023-01-01/12:00', estado: 'Enviada' },
    { id:2, valija: 'Valija2', origen: 'Origen2', usuario: 'Usuario2', fechaHora: '2023-01-01/12:30', estado: 'Recibida' },
    { id:3, valija: 'Valija3', origen: 'Origen3', usuario: 'Usuario3', fechaHora: '2023-01-01/13:45', estado: 'Enviada' },
    // Agrega más datos según sea necesario
  ];

  sobres = [
    { id:1, sobre: 'Sobre1', origen: 'Origen1', detalle:'lo que sea', usuario: 'Usuario1', fechaHora: '2023-01-01/12:00', estado: 'Enviada' },
    { id:2, sobre: 'Sobre2', origen: 'Origen2', detalle:'lo que sea', usuario: 'Usuario2', fechaHora: '2023-01-01/12:30', estado: 'Recibida' },
    { id:3, sobre: 'Sobre3', origen: 'Origen3', detalle:'lo que sea', usuario: 'Usuario3', fechaHora: '2023-01-01/13:45', estado: 'Enviada' },
    // Agrega más datos según sea necesario
  ];

  mostrarDetalles(index: number) {
    if (this.acordeonActivo === index) {
      // Si el panel actual ya está abierto, ciérralo
      this.acordeonActivo = null;
    } else {
      // Si el panel actual está cerrado, cierra el actual y ábrelo
      this.acordeonActivo = index;
    }
  }

    public ingresoPressedValija = false;
    public ingresoCollapsedValija = true;
    public ingresoButtonUsedValija = false;

  toggleIngresoValija() {
      // Verifica si el código de barras de la valija está vacío
    if (!this.codigoBarrasValija || this.codigoBarrasValija.trim() === '') {
      // Muestra una alerta utilizando ToastrService
      this.toastr.warning('El campo Código de Barras Valija no puede estar vacío', 'Advertencia', {
        positionClass: 'toast-top-center',
        tapToDismiss: true,
        progressBar: true,
        progressAnimation: 'increasing',
      });
      return;
    } else {
    this.ingresoPressedValija = true;
    this.ingresoButtonUsedValija = true;
    this.ingresoCollapsedValija = !this.ingresoCollapsedValija;
    const valija = this.codigoBarrasValija;
    console.log('valija ingresada:', valija);
    }

  }

  public ingresoPressedUbicacion = false;
  public ingresoCollapsedUbicacion = true;
  public ingresoButtonUsedUbicacion = false;

  toggleIngresoUbicacion() {
    this.ingresoPressedUbicacion = true;
    this.ingresoButtonUsedUbicacion = true;
    this.ingresoCollapsedUbicacion = !this.ingresoCollapsedUbicacion;
  }


}
