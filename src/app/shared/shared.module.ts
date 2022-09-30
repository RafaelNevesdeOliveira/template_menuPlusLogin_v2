import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNewFormComponent } from './components/button-new-form/button-new-form.component';
import { CampoControlErroComponent } from './components/campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MessageLoadingErrorListComponent } from './components/message-loading-error-list/message-loading-error-list.component';
import { OnOffButtonGroupComponent } from './components/on-off-button-group/on-off-button-group.component';
import { SpinnerLoaderPageComponent } from './components/spinner-loader-page/spinner-loader-page.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { SpinnerPageConstructionComponent } from './components/spinner-page-construction/spinner-page-construction.component';
import { SwitchSliderComponent } from './components/switch-slider/switch-slider.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FluenceLevelPipe } from './pipes/fluence-level.pipe';
import { LanguageTypePipe } from './pipes/language-type.pipe';
import { TelefonePipe } from './pipes/telefone.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CampoControlErroComponent,
    SpinnerLoaderComponent,
    SpinnerPageConstructionComponent,
    SpinnerLoaderPageComponent,
    SwitchSliderComponent,
    FilterPipePipe,
    TelefonePipe,
    FormDebugComponent,
    ButtonNewFormComponent,
    OnOffButtonGroupComponent,
    FluenceLevelPipe,
    LanguageTypePipe,
    TruncatePipe,
    LoaderComponent,
    MessageLoadingErrorListComponent,
  ],
  imports: [CommonModule, FormsModule, MatProgressSpinnerModule],
  exports: [
    CampoControlErroComponent,
    SpinnerLoaderComponent,
    SpinnerPageConstructionComponent,
    SpinnerLoaderPageComponent,
    SwitchSliderComponent,
    FilterPipePipe,
    TelefonePipe,
    FormDebugComponent,
    ButtonNewFormComponent,
    OnOffButtonGroupComponent,
    FluenceLevelPipe,
    LanguageTypePipe,
    TruncatePipe,
    LoaderComponent,
    MessageLoadingErrorListComponent,
  ],
})
export class SharedModule {}
