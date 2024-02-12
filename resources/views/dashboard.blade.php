<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12" style="background: white">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div id="app">
                    <post-component>

                    </post-component>
                </div>
        </div>
    </div>
</x-app-layout>
