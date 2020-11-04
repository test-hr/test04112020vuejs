import Vue from 'vue';
import Component from 'vue-class-component';
import { Inject } from 'vue-property-decorator';
import { Modules } from '@/store/Modules';
import { UserModule } from '@/modules/user/store/UserModule';

@Component
export class UserModuleMixin extends Vue {
  @Inject(Modules.USER_MODULE)
  protected userModule!: UserModule;

  created() {
    if (
      this.userModule.items.length === 0 &&
      !this.userModule.loading
    ) {
      this.userModule.fetchAll();
    }
  }
}
