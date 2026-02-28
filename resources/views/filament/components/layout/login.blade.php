<x-filament-panels::layout.base :livewire="$livewire">
    <style>
        body { background: #0a0a0a !important; }

        /* ===== Split Screen ===== */
        .vntm-login-wrap {
            display: flex;
            min-height: 100dvh;
            width: 100%;
        }

        /* ===== Left Panel ===== */
        .vntm-login-left {
            flex: 1;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 3rem;
        }

        .vntm-login-left-bg {
            position: absolute;
            inset: 0;
            background: url('/images/ventioteam.jpeg') center center / cover no-repeat;
            filter: brightness(0.45);
            transition: filter 0.4s;
        }

        .vntm-login-left:hover .vntm-login-left-bg {
            filter: brightness(0.55);
        }

        .vntm-login-left-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(0,0,0,0.85) 0%,
                rgba(0,0,0,0.3) 50%,
                rgba(0,0,0,0.1) 100%
            );
        }

        .vntm-login-left-content {
            position: relative;
            z-index: 1;
        }

        .vntm-badge {
            display: inline-block;
            background: rgba(245, 158, 11, 0.2);
            border: 1px solid rgba(245, 158, 11, 0.5);
            color: #f59e0b;
            font-size: 0.7rem;
            font-weight: 600;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            padding: 0.3rem 0.8rem;
            border-radius: 999px;
            margin-bottom: 1rem;
        }

        .vntm-login-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800;
            color: #ffffff;
            line-height: 1.15;
            margin-bottom: 0.75rem;
            font-family: 'Inter', system-ui, sans-serif;
        }

        .vntm-login-title span { color: #f59e0b; }

        .vntm-login-subtitle {
            font-size: 0.95rem;
            color: rgba(255,255,255,0.55);
            max-width: 28rem;
            line-height: 1.6;
            margin-bottom: 2rem;
        }

        .vntm-stats { display: flex; gap: 2rem; }

        .vntm-stats-item { display: flex; flex-direction: column; }

        .vntm-stats-num {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f59e0b;
        }

        .vntm-stats-label {
            font-size: 0.75rem;
            color: rgba(255,255,255,0.45);
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        /* ===== Right Panel ===== */
        .vntm-login-right {
            width: 100%;
            max-width: 500px;
            background: #111111;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2.5rem 2rem;
            flex-shrink: 0;
            border-left: 1px solid rgba(255,255,255,0.06);
        }

        .vntm-form-inner {
            width: 100%;
            max-width: 380px;
        }

        .vntm-form-header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .vntm-form-header img {
            height: 3rem;
            object-fit: contain;
            margin: 0 auto 1rem;
            display: block;
        }

        .vntm-form-header h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f5f5f5;
            margin-bottom: 0.3rem;
            font-family: 'Inter', system-ui, sans-serif;
        }

        .vntm-form-header p {
            font-size: 0.875rem;
            color: rgba(255,255,255,0.4);
        }

        /* ===== Override Filament card in form ===== */
        .vntm-login-right .fi-simple-page {
            background: transparent !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
        }

        .vntm-login-right .fi-simple-page-content {
            padding: 0 !important;
            width: 100% !important;
        }

        .vntm-login-right .fi-simple-header {
            display: none !important;
        }

        /* ===== Responsive ===== */
        @media (max-width: 768px) {
            .vntm-login-left { display: none; }
            .vntm-login-right {
                max-width: 100%;
                border-left: none;
            }
        }
    </style>

    <div class="vntm-login-wrap">

        {{-- Left decorative panel --}}
        <div class="vntm-login-left">
            <div class="vntm-login-left-bg"></div>
            <div class="vntm-login-left-overlay"></div>
            <div class="vntm-login-left-content">
                <span class="vntm-badge">Content Management</span>
                <h1 class="vntm-login-title">
                    Ventio <span>Production</span><br>Dashboard
                </h1>
                <p class="vntm-login-subtitle">
                    Kelola konten, portfolio, dan statistik pengunjung dari satu tempat yang aman.
                </p>
                <div class="vntm-stats">
                    <div class="vntm-stats-item">
                        <span class="vntm-stats-num">100%</span>
                        <span class="vntm-stats-label">Aman</span>
                    </div>
                    <div class="vntm-stats-item">
                        <span class="vntm-stats-num">Real-time</span>
                        <span class="vntm-stats-label">Statistik</span>
                    </div>
                    <div class="vntm-stats-item">
                        <span class="vntm-stats-num">Full</span>
                        <span class="vntm-stats-label">Kontrol</span>
                    </div>
                </div>
            </div>
        </div>

        {{-- Right form panel --}}
        <div class="vntm-login-right">
            <div class="vntm-form-inner">
                <div class="vntm-form-header">
                    <img src="/images/ventiologo.png" alt="Ventio Production">
                    <h2>Selamat Datang</h2>
                    <p>Masuk ke panel admin Ventio Production</p>
                </div>

                {{ $slot }}
            </div>
        </div>

    </div>
</x-filament-panels::layout.base>
