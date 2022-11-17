<template>
  <v-container>
    <v-select
      label="言語を選択"
      :items="$i18n.availableLocales"
      v-model="$i18n.locale"
    ></v-select>
    <div class="mt-4">
      <p>{{ $t('convert.text') }}</p>
      {{ $t('auth.login') }}
      {{ $t('auth.signup') }}
    </div>
    <div class="mt-4">
      <p>{{ $t('convert.date') }}</p>
      <i18n-d
        tag="p"
        :value="new Date()"
        format="long"
        :locale="$i18n.locale"
      ></i18n-d>
    </div>
    <div class="mt-4">
      <p>{{ $t('convert.number') }}</p>
      <i18n-n
        tag="p"
        :value="100"
        format="currency"
        :locale="$i18n.locale"
      >
      </i18n-n>
    </div>
  </v-container>
</template>

<script lang='ts' setup>

</script>
